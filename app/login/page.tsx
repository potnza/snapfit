import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
    return (
        <div className="bg-green-900 p-4">
            <h1 className="text-white text-xl"></h1>
        </div>
    );
};

const Login = () => {
    return (
        <div className="bg-green-900 min-h-screen">
            <Header />
            <div className="mt-48 flex justify-center">
                <div>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        className="w-[349px] h-[46px] bg-white rounded-[25px] mt-7 font-bold border-2 text-sm border-transparent focus:border-lime-400" />

                    <Input
                        type="password"
                        placeholder="Senha"
                        className="w-[349px] h-[46px] bg-white rounded-[25px] mt-7 font-bold border-2 text-sm border-transparent focus:border-lime-400" />
                </div>
            </div>
            <div className="flex justify-center">
                <Button className="w-[349px] h-[46px] bg-lime-400 hover:bg-lime-500 rounded-[15px] text-sm mt-10 flex justify-center text-black font-extrabold">
                    Entrar
                </Button>
            </div>
            <div className="flex justify-center">
                <div className="w-[119px] h-5 text-lime-400 text-[15px] text-sm mt-14">Esqueci a senha</div>
            </div>
            <div className="flex justify-center mt-[43px]">
                <div className="flex justify-center items-center">
                    <div className="w-[177px] h-[0px] origin-top-left border border-white border-opacity-50"></div>
                    <div className="w-6 h-5 text-white text-[15px] text-sm mx-2">OU</div>
                    <div className="w-[177px] h-[0px] origin-top-left border border-white border-opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;