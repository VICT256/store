import * as yup from "yup"

const PasswordRules = /^(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}$/;
// min of 5 character, ! upper case letter, 1 lowe case letter, 1 numeric digit.

export const signupSchema = yup.object().shape({
    fullname:yup.string().required("please enter your fullname"),
    username :yup.string().notOneOf(['alpha','beta'], "username has been taken")
    .min(5,"username must be at least 3 characters").required("username required"),
    email: yup.string().email("Please enter a valid email").required(),
    gender: yup.string().oneOf(['male','female']).required("Gender Required"),
    password: yup.string().min(1,"must be at least 3 characters").required("password required"),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], "password not match").required("password required")

})

export const loginSchema = yup.object().shape({
    email: yup.string().min(5,"username must be at least 3 characters").required("username is required"),
    password: yup.string().required("password required"),
})

export const emailVerifySchema = yup.object().shape({
   verify_token: yup.number().positive().min(3,"token must be 6 digits").integer().required("Token is required"),
})
export const phoneVerifySchema = yup.object().shape({
    // country_code: yup.string().oneOf(['+234','+233', '+44', '+1']).required("Required"),
    country_code: yup.string().required("Required"),
    phone_number: yup.number().positive().min(8,"token must be 6 digits").integer().required("Enter Phone Number"),
 })

 export const phoneVerifyOTPSchema = yup.object().shape({
    phone_number_otp: yup.number().positive().min(8,"token must be 6 digits").integer().required("Enter Phone Number"),
 })

 export const NINVerifySchema = yup.object().shape({
    NIN: yup.number().positive().min(10,"not lees than 10 digits").integer().required("please provide a  valid NIN"),
 })

 export const KYC3VerifySchema = yup.object().shape({
    country: yup.string().required("select country"),
    state: yup.string().required("Enter your state of residence"),
    address: yup.string().required("Enter your address"),
    zipcode : yup.string().required("Enter Zipcode"),
    id: yup.mixed().required("Upload ID")

 })

 export const KYCBVerifySchema = yup.object().shape({
    business_name : yup.string().required("Enter business name"),
    certificate_number : yup.string().required("Provide business certificate number"),
    country: yup.string().required("Select country"),
    state: yup.string().required("Enter your state of residence"),
    address: yup.string().required("Enter your business address"),
    zipcode : yup.string().required("Enter Zipcode"),
    proof_of_address: yup.mixed().required("Upload proof of Address")

 })


export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Field must not be empty"),
  
 })

 export const ResetPasswordSchema = yup.object().shape({
    password: yup.string().min(1,"must be at least 3 characters").required("password required"),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], "password not match").required("password required")

})

export const ChangePasswordSchema = yup.object().shape({
    oldpassword: yup.string().min(1,"must be at least 3 characters").required("password required"),
    newpassword: yup.string().min(1,"must be at least 3 characters").required("password required"),
    confirmpassword: yup.string().oneOf([yup.ref('newpassword'), null], "password not match").required("password required")

})

export const ChangeUsernameSchema = yup.object().shape({
    username: yup.string().min(1,"must be at least 3 characters").required("Username required"),
    password: yup.string().min(1,"must be at least 3 characters").required("Password required"),

})

export const ChangeFullnameSchema = yup.object().shape({
    fullname: yup.string().min(1,"must be at least 3 characters").required("Type your required"),
    password: yup.string().min(1,"must be at least 3 characters").required("Password required"),

})

export const createPostSchema = yup.object().shape({
 
    content : yup.string().min(10,"not less than 10 words").max(256,"has exceeded word limit")
    .required("Enter Content to Post"),
    //  bold: yup.boolean(),
    //  isItalic : yup.boolean()
})

export const createPersonalGroupSchema = yup.object().shape({
    groupname : yup.string().min(2,"must not must be at least 3 characters").required(),
    category: yup.string().oneOf(['Fashion and Clothing','Health & Fitness','Entertainment','Sports','Science and Tech','ESG','Social','Business and Finance','Education','Public and Governance']).
    required("Category Required"),
    brief_description: yup.string().min(5,"Must not be less than 5 characters")
    .required("Description Required"),
    paymentType: yup.string().oneOf(['fiat only','crypto only','fiat & Crypto']).required("Payment Type Required"),
    pricingType: yup.string().oneOf(['monthly','onetimepayment']).required("Pricing Type Required"),
    fiatPrice: yup.number().positive().required('Price is required'),
    // cryptoPrice: yup.number().positive().required('Price is required')
})

export const createBusinessGroupSchema = yup.object().shape({
    businessname : yup.string().min(2,"must not must be at least 3 characters").required("Required"),
    category: yup.string().oneOf(['Fashion and Clothing','Health & Fitness','Entertainment','Sports','Science and Tech','ESG','Social','Business and Finance','Education','Public_and_Governance']).
    required("Category Required"),
    brief_description: yup.string().min(5,"Must not be less than 5 characters")
    .required("Description Required"),
    paymentType: yup.string().oneOf(['fiat only','crypto only','fiat & Crypto']).required("Payment Type Required"),
    pricingType: yup.string().oneOf(['monthly','onetimepayment']).required("Pricing Type Required"),
    BfiatPrice: yup.number().positive().required('Price is required'),
    // BcryptoPrice: yup.number().positive().required('Price is required')
})

export const editGroupSchema = yup.object().shape({
    groupname : yup.string().min(2,"must not must be at least 3 characters").required("Required"),
    // addAdmin: yup.string().required("Category Required"),
    brief_description: yup.string().min(5,"Must not be less than 5 characters")
    .required("type post"),
    paymentType: yup.string().oneOf(['fiat only','crypto only','fiat & Crypto']).required("Payment Type Required"),
    fiatPrice: yup.number().positive().required('Price is required'),
    cryptoPrice: yup.number().positive().required('Price is required')
})

export const withdrawSettingsCryptoFormSchema = yup.object().shape({
    coin_name: yup.string().oneOf(['BNB','USDT','BTC','SOL',]).required("select coin"),
    network: yup.string().oneOf(['BINANCE','ETHEREUM','TRON','SOLANA',]).required("select coin"),
    address: yup.number().positive().required('Enter Amount'),
    otp: yup.number().positive().required('OTP is required'),
    password: yup.string().min(1,"must be at least 3 characters").required("password required"), 
})

export const withdrawSettingsFiatFormSchema = yup.object().shape({
    bank_name: yup.string().min(2,"must not must be at least 3 characters").required("Required"),
    // accountName: yup.string().min(2,"must not must be at least 3 characters").required("Required"),
    accountNumber: yup.number().positive().required('Enter Account Number'),
    otp: yup.number().positive().required('OTP is required'),
    password: yup.string().min(1,"must be at least 3 characters").required("password required"), 
})

export const withdrawFiatFormSchema = yup.object().shape({
    amount: yup.number().positive().required('Enter Account Number'),
    otp: yup.number().positive().required('OTP is required'),
    password: yup.string().min(1,"must be at least 3 characters").required("password required"), 
})

export const withdrawCryptoFormSchema = yup.object().shape({
    amount: yup.number().positive().required('Enter Account Number'),
    otp: yup.number().positive().required('OTP is required'),
    password: yup.string().min(1,"must be at least 3 characters").required("password required"), 
})

export const FeedbackFormSchema = yup.object().shape({
    name:yup.string().required(),
    email: yup.string().email().required(),
    comment: yup.string().required(),
    // category: yup.string().required(),


})

export const ComplaintFormSchema = yup.object().shape({
    name:yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().email().required(),
    description: yup.string().required(),
    priority:yup.string().required(),
    // category: yup.string().required(),

})



// export const basicSchema = yup.object().shape({
//     email: yup.string().email("Please enter a valid email").required("Required"),
//     age: yup.number().positive().integer().required("Required"),
//     password: yup.string().min(5).required("Password Required"),
//     // .matches(PasswordRules,{ message: "Please create a stronger Password" }).required("Password Required"),
//     confirmPassword: yup.string().oneOf([yup.ref('password'), null], "password must match").required("Password required")
// })

// export const advacedSchema = yup.object().shape({
//     username :yup.string().min(5,"Username must be at least 3 characters").required("Required"),
//     jobType: yup.string().oneOf(['designer','developer', 'skitmaker']).required("Required"),
//     // .matches(PasswordRules,{ message: "Please create a stronger Password" }).required("Password Required"),
//     acceptedTos: yup.boolean().oneOf([true], 'Please accept the terms of service'),
//     files: yup.mixed().required("Required")
//   })