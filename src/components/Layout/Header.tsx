export const Header = () => {
    return (
        <div>
            <div className="h-[60px] bg-darkpink px-8 flex justify-between items-center">
                <div className = "text-white text-3xl font-bold"> Blocket </div>
                <div className="flex justify-center items-center">
                    <div className="mx-8 text-black text-1xl font-bold">Log in</div>
                    <div className="text-black text-1xl border-4 px-2 py-1 border-black font-bold">Sign in</div>
                </div>
            </div>
            <div className="h-[40px] bg-darkgreen grid content-center px-8">
            </div>
        </div>
    );
}