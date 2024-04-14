import { SubMenu } from "@/components/SubMenu";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Helpers() {
      return (
            <>
                  <div className="container mx-auto cursor-default">
                        {/* submenu */}
                        <SubMenu number={"03"} title={"what i do"} year={"services"} title2={"things i can help you"} />
                        {/* submenu */}
                        {/*  */}
                        <div>
                              <h1 className="text-4xl text-muted-foreground font-roboto">
                                    {"As a freelance full-stack web developer, I craft websites that stand out. "} <span className="text-white underline">get a unique, lightning-fast, and ultra-secure </span>  You  online presence that captivates your audience.
                              </h1>
                        </div>
                        {/*  */}
                        <ul className="my-20 text-xs">
                              <li className="flex justify-between text-muted-foreground mb-4">
                                    <span>Code Editor</span>
                                    <p className="text-end">Visual Studio Code</p>
                                    <Link href=""><ArrowUpRight /></Link>
                              </li>
                              <li className="mb-10">
                                    <hr />
                              </li>
                              <li className="flex justify-between text-muted-foreground mb-4">
                                    <span>Techonologies</span>
                                    <p className="text-end">TALL STACK, MERN STACK, Supabse, & Prisma</p>
                                    <Link href=""><ArrowUpRight /></Link>
                              </li>
                              <li className="mb-10">
                                    <hr />
                              </li>
                              <li className="flex justify-between text-muted-foreground mb-4">
                                    <span>Services</span>
                                    <p className="text-end">AWS & STRIPE</p>
                                    <Link href=""><ArrowUpRight /></Link>
                              </li>
                              <li className="mb-10">
                                    <hr />
                              </li>

                        </ul>
                        {/*  */}
                  </div>
            </>
      )
}