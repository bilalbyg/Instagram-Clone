import Input from "../../components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { RegisterSchema } from "../../validation/register-schema";
import Button from "../../components/Button";
import { register } from "../../firebase";
import Separator from "../../components/Separator";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values); // eğer response yoksa yönlendirme yapılmaması için if bloğu eklendi
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className="bg-white border px-[40px] pt-10 pb-6">
        <a href="#" className="flex justify-center mb-4">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt=""
          />
        </a>
        <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
          Sign up to see photos and videos from your friends.
        </p>
        <Button>

          <AiFillFacebook size={16}/>
          Log in with Facebook
        </Button>
        <Separator/>
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: "",
            full_name: "",
            user_name: "",
            password: ""
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty, values }) => (
            <Form className="grid gap-y-1.5">
              <Input name="email" label="Email" />
              <Input name="full_name" label="Full name" />
              <Input name="user_name" label="Username" />
              <Input type="password" name="password" label="Password" />
              <p className="text-xs text-[#8e8e8e] py-2 text-center">People who use our service may have uploaded your contact information to Instagram. <a href="#" className="font-bold">Learn More</a></p>
              <p className="text-xs text-[#8e8e8e] text-center">By signing up, you agree to our <a href="#" className="font-bold">Terms</a>, <a href="#" className="font-bold">Data Policy</a> and <a href="#" className="font-bold">Cookies Policy</a>.</p>
              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                Sign up
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="bg-white border p-4 text-sm text-center">
        Have an account?
        <Link to="/auth/login" className="font-semibold text-brand">
          Log in
        </Link>
      </div>
    </div>
  );
}
