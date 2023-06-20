import React, { useSignIn } from 'react-auth-kit'
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import API from '~/API';
import { ToggleSwitch, Button, Checkbox, Label, TextInput } from 'flowbite-react';

type Props = { title: string; content: string; };
// const Input = ({ placeholder, name, type, value, handleChange }) => (


//         <input
//                 placeholder={placeholder}
//                 type={type}
//                 step="0.0001"
//                 value={value}
//                 onChange={(e) => handleChange(e, name)}
//                 className="text-[#67748E] focus:outline-[#E293D3] rounded-[6px] h-[42px] w-full border mb-4 p-3"
//         />
// );



export default SignIn