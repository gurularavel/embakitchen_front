const registrationFormStyles: Readonly<TwClasses> = {}
const styles = registrationFormStyles as Readonly<StyleRecord>

export function RegistrationForm(): React.ReactElement {
  return (
    <form>
      <div>
        <div>
          <label htmlFor='name'>Ad</label>
          <br />
          <input type='text' />
        </div>
      </div>
    </form>
  )
}
