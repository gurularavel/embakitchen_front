export default function ProductDetailsPage({
  params: { locale, category, slug },
}: PageProps): React.ReactElement {
  return (
    <div>
      <h1>
        {category} - {slug}
      </h1>
    </div>
  )
}
