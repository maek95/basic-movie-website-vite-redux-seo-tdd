export default function SlideMenu({children}) {

  if (!children) {
    <div className="w-full h-96 ">
      Empty
    </div>
  }

  return (
    <> 
      <div className="flex gap-4 flex-nowrap max-w-full overflow-x-scroll ">
        {/* TODO: md: lg: sm: !!! */}
        {children}
      </div>
    </>
  )
}