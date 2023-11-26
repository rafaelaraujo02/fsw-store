"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentCircleIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "../ui/card";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";

const Header = () => {

    const {status, data} = useSession();

    const handleLoginClick = async () => {
        await signIn();
    }
    
    const handleLogoutClick = async () => {
        await signOut();
    }

    return(
        <Card className="flex items-center justify-between p-[1.875rem]">
            <Sheet>
        
                <SheetTrigger asChild={true}>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>

                    {status === 'authenticated' && data?.user && (
                        <div className="flex flex-col">
                            <div className="flex items-center py-4 gap-2">
                                <Avatar>
                                    <AvatarFallback>
                                        {/* O AvatarFallBack é como o alt das imagens. 
                                        O código abaixo é caso não tenha nome de usuário, o que é quase impossível */}
                                        {data.user.name?.[0].toUpperCase()}
                                    </AvatarFallback>

                                    {data.user.image && (
                                        <AvatarImage src={data.user.image}/>
                                    )}
                                </Avatar>

                                <div className="flex flex-col">
                                    <p className="font-medium">{data.user.name}</p>
                                    <p className="text-sm opacity-75">Boas Compras!</p>
                                </div>
                            </div>
                            
                            <Separator/>
                        </div>
                    )}

                    <div className="mt-4 flex flex-col gap-2">
                        {status === 'unauthenticated' && (
                            <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                                <LogInIcon size={16}/>
                                Fazer Login
                            </Button>
                        )} 

                        {status === 'authenticated' && (
                            <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                                <LogOutIcon size={16}/>
                                Fazer Logout
                            </Button>
                        )}
                        
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16}/>
                            Home
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon size={16}/>
                            Ofertas
                        </Button>
                        
                        <SheetClose asChild>
                            <Link href="/catalog">
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <ListOrderedIcon size={16}/>
                                    Catálogo
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

            <Link href="/">
                <h1 className="text-lg font-semibold">
                    <span className="text-primary">
                        FSW 
                    </span>
                    Store
                </h1>
            </Link>
            
            <Sheet>
                <SheetTrigger>
                    <Button size="icon" variant="outline">
                        <ShoppingCartIcon className="h-5 w-5"/>
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <h1>Cart</h1>
                </SheetContent>
            </Sheet>

        </Card>
    )

}

export default Header;