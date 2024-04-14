import { SubMenu } from "@/components/SubMenu";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const showcase = [
      { name: "BelajarAja", url: "https://ucarecdn.com/24721aed-f2e7-44d6-897f-b368da95769b/Screenshot20240402at130437.png", width: 2000, height: 2000, link: "https://belajaraja.vercel.app" },
      { name: "Notiz ", url: "https://ucarecdn.com/392a2b52-158c-4866-8483-459752b55068/Screenshot20240402at131003.png", width: 2000, height: 2000, link: "https://notiz-me.vercel.app" },
      { name: "Charity APS", url: "https://ucarecdn.com/1d8ad2aa-5354-4a16-827f-2867c13c9d9f/Screenshot20240414at110333.png", width: 2000, height: 2000, link: "https://amalprihatinsabah.sabahloka.com/" },
      { name: "MBRKK ", url: "https://ucarecdn.com/9118dd53-d9e8-44c5-8731-f5d0cc9e9dd2/Screenshot20240414at103726.png", width: 2000, height: 2000, link: "https://mbrkk.sabahloka.com/" },
      { name: "Da Clean ", url: "https://ucarecdn.com/52c8cb04-0eab-41e9-b373-a66ddf7e1868/Screenshot20240414at104607.png", width: 2000, height: 2000, link: "https://da-clean.vercel.app/" },
      { name: "Warung Ku", url: "https://ucarecdn.com/f28c7493-847c-42a1-be97-af1052992390/Screenshot20240414at110043.png", width: 2000, height: 2000, link: "https://warungku-zeta.vercel.app/" },
];

export function ShowCase() {
      return (
            <>
                  <div className="container mx-auto">
                        {/*  */}
                        <SubMenu number={"02"} title={"selected works"} year={"portofolio 2023/2024"} title2={""} />
                        {/*  */}
                        {/*  */}
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                              {
                                    showcase.map((showcase, index) => (
                                          <div key={index}>
                                                <Card className="h-auto border-0 bg-gradient-to-r from-slate-800 to-slate-800">
                                                      <Image width={showcase.width} height={showcase.height} alt="" src={showcase.url} />
                                                </Card>
                                                <div className="mt-4 w-32">
                                                      <Link className="font-roboto text-muted-foreground hover:text-white transition flex" href={showcase.link}>{showcase.name} <ArrowUpRight /></Link>
                                                </div>
                                          </div>
                                    ))
                              }

                        </div>
                        {/*  */}
                  </div>
            </>
      )
}