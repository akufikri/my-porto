export function SubMenu({ number, title, year, title2 }) {
      return (
            <>
                  <div className="flex justify-between my-36">
                        <div>
                              <h1 className="text-sm text-muted-foreground font-bebas">
                                    # {number}
                              </h1>
                        </div>
                        <div>
                              <h1 className="text-sm text-muted-foreground font-bebas">
                                    {title}
                              </h1>
                        </div>
                        <div>
                              <h1 className="text-sm text-muted-foreground font-bebas">
                                    {year}
                              </h1>
                        </div>
                        <div>
                              <h1 className="text-sm text-muted-foreground font-bebas">
                                    {title2}
                              </h1>
                        </div>
                  </div>
            </>
      )
}