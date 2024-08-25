"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { signIn } from "next-auth/react"
const SidebarSheet = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <h2 className="font-bold">Olá, Faça seu Login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça seu Login!</DialogTitle>
              <DialogDescription>
                Conecte-se Usando sua conta Google.
              </DialogDescription>
            </DialogHeader>

            <Button
              variant={"outline"}
              className="gap-1 font-bold"
              onClick={handleLoginWithGoogleClick}
            >
              <Image
                src="/Google.svg"
                width={18}
                height={18}
                alt={"Fazer Login com Google!"}
              />
              Google!
            </Button>
          </DialogContent>
        </Dialog>
        {/* <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww" />
        </Avatar>

        <div>
          <p className="font-bold">Anderson Moreira</p>
          <p className="text-xs">anderson.d.mm@hotmail.com</p>
        </div> */}
      </div>

      <div className="flex flex-col gap-1 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              width={18}
              height={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>
      <div className="py5 flex flex-col gap-2 border-b border-solid">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
