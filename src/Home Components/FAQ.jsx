import Accordion from "./Accordion"

const FAQ = () => {
  return (
    <div className="p-4 m-10 bg-gray-200 rounded-lg space-y-5">

        <Accordion title='How many times can I share a secret in a day?' answer='Only once my friend'/>
        <Accordion title='Will i be dropping the secret anonymously?' answer='yes '/>
        <Accordion title='Is this sussy?' answer='No'/>
        <Accordion title='Do i have to follow the socials below?' answer='definitely'/>
    </div>
  )
}

export default FAQ