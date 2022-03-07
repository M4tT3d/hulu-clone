import { ComponentType, SVGProps } from "react"

interface headerItemProps {
  title: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

function HeaderIteam({ title, Icon }: headerItemProps): JSX.Element {
  return (
    <div
      className="group flex w-12 cursor-pointer flex-col 
        items-center hover:text-white sm:w-20"
    >
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <h3 className="tracking-wider opacity-0 group-hover:opacity-100">
        {title}
      </h3>
    </div>
  )
}
export default HeaderIteam
