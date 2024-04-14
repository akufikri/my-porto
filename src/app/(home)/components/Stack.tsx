"use client"
import * as React from "react"
import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
export function Stack() {
      const plugin = React.useRef(
            Autoplay({ delay: 2000, stopOnInteraction: true })
      )
      return (
            <>
                  <div className="container w-full mx-auto mt-20 px-10">
                        <Carousel plugins={[
                              Autoplay({
                                    delay: 2000,
                              }),
                        ]}>
                              <CarouselContent>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">LARAVEL / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">LIVEWIRE / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">TAILWINDCSS / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">MYSQL / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">REACT JS / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">NODE JS / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">NEXT JS / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">MONGODB /</h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">PRISMA / </h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">SUPABASE /</h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">AWS S3 BUCKETS /</h1>
                                          </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-auto">
                                          <div className="w-full">
                                                <h1 className="font-bebas text-muted-foreground hover:text-white transition font-bold  text-7xl">AWS I AM.</h1>
                                          </div>
                                    </CarouselItem>
                              </CarouselContent>

                        </Carousel>
                  </div>
            </>
      )
}