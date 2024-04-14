import { motion } from "framer-motion";
export function Hero() {
      return (
            <>
                  <div className="h-[90vh] container">
                        <div className="absolute bottom-0">
                              <div className="flex justify-between  translate-y-7">
                                    <div className="max-w-xl">
                                          <p className="text-muted-foreground uppercase  text-xs">{"Hi! I'm Fikri Nurhakim, a fresh software engineering graduate specializing in web development. I'm ready to learn and build amazing web experiences – let's get started!"}</p>
                                    </div>
                                    <div className="mt-auto">
                                          <span className="text-muted-foreground  text-sm">{"( SCROLL TO EXPLORE )"}</span>
                                    </div>
                              </div>
                              <div className="text-center w-full">
                                    <h1 className="font-bebas text-[150px] font-extrabold text-muted-foreground">FULL-STACK WEB DEVELOPER</h1>
                              </div>
                        </div>
                  </div>
            </>
      )
}