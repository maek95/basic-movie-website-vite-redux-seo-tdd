export default function SlideMenuAndFlexWrap({children}) {

  return (
    <> {/* flex-wrap on desktop, slidemenu on mobile */}
      <div className="flex gap-4 flex-nowrap max-w-full lg:max-w-auto overflow-x-scroll lg:overflow-x-visible lg:flex-wrap ">
        {/* TODO: md: lg: sm: !!! */}
        {children}
      </div>
    </>
  )
}