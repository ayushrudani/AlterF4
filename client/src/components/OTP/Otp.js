import React , {useState} from 'react'

// import './Otp.scss'

export default function OTP() {
  const [otp ,setOtp] = useState(new Array(6).fill(""));
  return (
    <div>
      <h3>How to creaet an OTP With React</h3>
      <div className="otp-area" style={{width: "70%" , margin: "20px auto" , display: "flex" , gap:" 10px"}}>
        {
          otp.map((value, index) => {
            return (
              <input
                type="text"
                name="otp"
                className="otp-field"
                maxLength="1"
                value={value}
                style={{ width : "50px" , padding : "10px" , outline: "none" ,  textAlign: "center"}}
                // onChange={e => handleChange(e, index)}
                // onFocus={e => e.target.select()}
              />
            )
          })
        }
      </div>
    </div>
  )
}
