import React from 'react';

interface SubMenuProps {
      number: string; // Assuming 'number' is a string based on its usage in JSX
      title: string;
      year: string;
      title2: string;
}

export function SubMenu({ number, title, year, title2 }: SubMenuProps) {
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
      );
}
