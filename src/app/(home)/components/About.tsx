import { SubMenu } from "@/components/SubMenu";
import { LinkedinIcon, Mail } from "lucide-react";

export function About() {
      return (
            <>
                  <div className="container mx-auto cursor-default">
                        {/* submenu */}
                        <SubMenu number={"01"} title={"about me"} year={"2024"} title2={"who am i"} />
                        {/* submenu */}
                        {/*  */}
                        <div>
                              <h1 className="text-2xl text-muted-foreground font-roboto">
                                    {"I'm a Full-Stack Web Developer with a focus on building secure, high-performance websites. My preferred stacks are TALL and MERN, leveraging the power of Prisma ORM, Supabase, and AWS S3."} <span className="text-white underline">Prioritizing security and speed drives</span>  {"my development approach."}
                              </h1>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex justify-between my-36">
                              <div>
                                    <span className="text-muted-foreground">Things i can help you :</span>
                              </div>
                              <div className="max-w-lg text-muted-foreground">
                                    <p>I specialize in building websites that prioritize security, responsiveness, and speed. Your website will not only look great on desktops, but seamlessly adapt to phones and tablets for a smooth user experience. This translates to a more secure and accessible website for your visitors.</p>
                              </div>
                              <div>
                                    <ul className="space-y-4 text-muted-foreground">
                                          <li className="flex gap-2">
                                                <LinkedinIcon /> <span className="mt-1">Fikri Nurhakim</span>
                                          </li>
                                          <li className="flex gap-2">
                                                <Mail /> <span className="mt-1">fikricrft@gmail.com</span>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        {/*  */}
                  </div>
            </>
      )
}