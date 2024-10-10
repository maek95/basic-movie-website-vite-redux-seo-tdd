export default function SlideMenu({children}) {

  return (
    <> 
      <div className="flex gap-2 flex-wrap">
        {/* TODO: md: lg: sm: !!! */}
        {children}
      </div>
    </>
  )
}