import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentCircleIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "../ui/card";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "./sheet";

const Header = () => {

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

                    <div className="mt-2 flex flex-col gap-2">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon size={16}/>
                            Fazer Login
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16}/>
                            Home
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon size={16}/>
                            Ofertas
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon size={16}/>
                            Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            
            <h1 className="text-lg font-semibold">
                <span className="text-primary">
                    FSW 
                </span>
                Store
            </h1>
            
            <Button size="icon" variant="outline">
                <ShoppingCartIcon className="h-5 w-5"/>
            </Button>

        </Card>
    )

}

export default Header;