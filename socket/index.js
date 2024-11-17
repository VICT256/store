require("dotenv").config();
const { Server } = require("socket.io");

const io = new Server({cors: process.env.CLIENT_URL });

onlineUsers =[];

io.on("connection", (socket) => {
  console.log("i don connect oo", socket.id);
  //;isten to a new connection or event once a client connects
  socket.on( "addNewUser", (userId)=> {

   console.log(!onlineUsers?.some(user => user.userId ===userId));

   !onlineUsers?.some(user => user.userId === userId)  && onlineUsers.push({ userId,socketId: socket.id})

   console.log(onlineUsers);
   
  })

  io.emit("getOnlineUsers", onlineUsers)

// send chat messages
  socket.on("sendChatMessage", (message)=>{

    // console.log("new message = ", message)

    const user = onlineUsers.find((user)=>user.userId === message.recipientId )

    if(user) {        
        io.to(user.socketId).emit("getChatMessage", message)
 
        io.to(user.socketId).emit("getChatNotification", {
          senderId : message.senderId,
          isRead :false,
          date: new Date()
        })

        console.log(`sent to  ${user.socketId}`);
    }
  })

  // sending groupmessages
  socket.on("sendGroupMessage", (message,allgroupUUIDs )=>{ 

    // console.log("new message", message,'allgroupUUIDs', allgroupUUIDs)
  
       allgroupUUIDs.map(element=> {

        const user = onlineUsers.find((user)=>user.userId === element.userUUID )
         if(user) {
        console.log('user is found');
        io.to(user.socketId).emit("getGroupMessage", message)

        io.to(user.socketId).emit("getGroupNotification", {
          senderId : message.senderId,
          isRead :false,
          date: new Date()
        })
        console.log(`sent to  ${user.socketId}`);
    }
      })

    // console.log('userfond',user);
    
  })
  socket.on("disconnect", ()=> {
    onlineUsers = onlineUsers.filter((user)=>user.socketId !== socket.id)

    io.emit("getOnlineUsers", onlineUsers)

  })

});
const port = 7000

io.listen(port, ()=> {
  console.log(`server running on ${port}`);
});