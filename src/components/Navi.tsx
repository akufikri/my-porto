import Link from "next/link";
import { Button } from "./ui/button";

export function Navi() {
      return (
            <>
                  <nav>
                        <div className="my-5 container">
                              <ul className="flex justify-between text-[12px]">
                                    <li>
                                          <Link className="text-muted-foreground hover:text-white transition" href={'/'}>
                                                <span className="block font-mono">FIKRI <span className="block">NURHAKIM</span></span>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link className="text-muted-foreground hover:text-white transition" href={'/'}>
                                                <span className="font-mono">FULL-STACK <span className="block">WEB DEVELOPER</span></span>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link className="text-muted-foreground hover:text-white transition" href={'/'}>
                                                <span className="font-mono">AVAILABLE FOR <span className="block">FREELANCE WORK</span></span>
                                          </Link>
                                    </li>
                                    <li>
                                          <Button variant={'outline'} className="text-xs text-muted-foreground rounded-full">CONTACT</Button>
                                    </li>
                              </ul>
                        </div>
                  </nav>
            </>
      )
}