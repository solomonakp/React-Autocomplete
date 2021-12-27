import { useState, FC, ChangeEvent, KeyboardEvent, MouseEvent } from 'react'
import Suggestions from './Suggestions'

interface AutoCompleteProps {
  suggestions: string[]
}

interface AutoCompleteState {
  currentSuggestion: number
  filteredList: string[]
  isSuggestions: boolean
  input: string
}

const Autocomplete: FC<AutoCompleteProps> = (props) => {
  const { suggestions } = props

  const [state, setState] = useState<AutoCompleteState>({
    currentSuggestion: 0,
    filteredList: [],
    isSuggestions: false,
    input: '',
  })

  const { filteredList, input, isSuggestions, currentSuggestion } = state

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value

    const filteredList = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    )

    setState({
      currentSuggestion: 0,
      filteredList,
      isSuggestions: true,
      input: e.currentTarget.value,
    })
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setState({
        ...state,
        currentSuggestion: 0,
        isSuggestions: false,
        input: filteredList[currentSuggestion],
      })
    } else if (e.keyCode === 38) {
      if (currentSuggestion === 0) {
        return
      }

      setState({ ...state, currentSuggestion: currentSuggestion - 1 })
    } else if (e.keyCode === 40) {
      if (currentSuggestion - 1 === filteredList.length) {
        return
      }

      setState({ ...state, currentSuggestion: currentSuggestion + 1 })
    }
  }

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    setState({
      currentSuggestion: 0,
      filteredList: [],
      isSuggestions: false,
      input: e.currentTarget.innerText,
    })
  }

  return (
    <div className="auto-complete">
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search Here"
      />
      <Suggestions
        filteredList={filteredList}
        input={input}
        isSuggestions={isSuggestions}
        onClick={onClick}
      />
    </div>
  )
}

export default Autocomplete
