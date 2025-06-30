function sectionHeader(props) {
  return (
    <div className="section-header">
        <span className="text-primary">Practice Advice</span>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default sectionHeader