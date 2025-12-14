type sectionHeadingProps = {
    heading: string,
    paragraph: string
}
export default function SectionHeading({ heading, paragraph } : sectionHeadingProps ) {
    return(
        <>
        <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {paragraph}
        </p>
      </div>
        </>
    )
}