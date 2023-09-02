import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="flex justify-between py-3">
            <div className="flex gap-2 items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/7933/7933336.png" className="w-8" alt="logo" />
            <h1 className="font-semibold">Supa Calender</h1>
            </div>
            <Button>Login</Button>
        </div>
    )
}