import React, { useEffect, useState } from "react";

// lib
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// custom
import { classNames, scrollToSection } from "../../utils/helpers";

//regex
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function ForgetPassword() {
	const navigate = useNavigate();
  const [code , setCode] = useState('')
	const [loading, setLoading] = useState(false);
	const [status, setstatus] = useState(false);
	const [errors, setErrors] = useState(null);

  const [formData, setFormData] = useState({
		email: "",
	});

	const [formValidate, setFormValidate] = useState({
		email: false,
	});

	const [formFocus, setFormFocus] = useState({
		email: false,
	});

	const handleInput = (e) => {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;
		setFormData({ ...formData, [name]: value });
		setErrors(null);
	};

	useEffect(() => {
		setFormValidate({
			...formValidate,
			email: EMAIL_REGEX.test(formData.email),
		});
	}, [formData]);

	useEffect(() => {
		if (errors) {
			toast.error(errors, {
				position: "top-left",
			});
			console.log("errors", errors);
		}
	}, [errors]);

	useEffect(() => {
		if (status) {
			navigate("/cala-reset-password/"+code);
		}
	}, [status]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors(null);
		setLoading(true);
		setstatus(false);

		//console.log("form", formData);
		if (!formValidate.email) {
			toast.error(`there was an error. please fill all fields in right way.`, {
				position: "top-left",
			});
			setLoading(false);
		} else {
			console.log("form - valid", formData);
		}
	};

  useEffect(()=>{
    scrollToSection(null)
  },[])


  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <span className="mx-auto p-5 rounded-full border border-black flex items-center">
            <FaRegUser className="w-8 h-8"/>
          </span>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Recover your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
                  className="font-medium text-primary-custom-brown hover:text-amber-800"
                  to={'/login'}
              >
                  Sign In.
            </Link>
          </p>
        </div>

        <form className="form_account mt-8 space-y-6" >
          {/* email */}
          <div className="rounded-md shadow-sm">
            <div className='mt-5 mb-10'>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="w-full relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    autoComplete="off"
                    aria-invalid={formValidate.email ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setFormFocus({ ...formFocus, email: true })}
                    onBlur={() => setFormFocus({ ...formFocus, email: false })}
                    className={classNames(
                      "rounded-lg py-3 px-6 outline-none w-full text-lg font-medium text-primary-custom-brown bg-white border placeholder:text-black placeholder:text-base placeholder:font-medium",
                      formFocus.email && !formValidate.email
                        ? "border-red-600"
                        : formFocus.email && formValidate.email
                        ? "border-green-600"
                        : "border-gray-600"
                    )}
                    placeholder="Email *"
                  />
                  <div
                    id="uidnote"
                    className={
                      formFocus.email && formData.email && !formValidate.email
                        ? " font-medium absolute -bottom-4 text-red-500 text-xs ml-4 mt-1 "
                        : "hidden"
                    }
                  >
                    Email not valid
                  </div>
              </div>

            </div>
          </div>
          {/* submit */}
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative w-full flex items-center space-x-2 justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-clr-success bg-gradient-to-r from-primary-custom-red to-primary-custom-orange hover:button-brightness hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
                <span>Send</span>
                {loading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-clr-main-dark font-semibold animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
            </button>
            <Link className="w-full flex items-center space-x-2 justify-center py-3 px-4 text-lg font-bold underline hover:text-blue-600" to={'/'}>Home</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword