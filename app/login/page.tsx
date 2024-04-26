import { Input } from "@/components/ui/input";

const Login = () => {
    return ( 
        <>
            <div>
            <div>
                <Input type="email" placeholder="email"/> 
            </div>

            <div>
                <Input type="password" placeholder="senha"/> 
            </div>
               
            </div>
        </>
    );
}
 
export default Login;