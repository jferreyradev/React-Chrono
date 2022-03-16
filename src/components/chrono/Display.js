const Display = ({count}) => {

    const toHours = (t) => Math.floor(t / 36000)
    const toMinutes = (t) => {
      const m = Math.floor(t / 600)
      return m < 60 ? m : m % 60
    }
    const toSeconds = (t) => {
      const s = Math.floor(t / 10)
      return s < 60 ? s : s % 60
    }
    const toMseconds = (t) => t < 10 ? t : t % 10

    return (
        <div >
            <span>{toHours(count).toString().padStart(2, '0')}</span>
            <span>:{toMinutes(count).toString().padStart(2, '0')}</span>
            <span>:{toSeconds(count).toString().padStart(2, '0')}</span>
            <span>.{toMseconds(count).toString()}</span>
        </div>
    )
}

export default Display