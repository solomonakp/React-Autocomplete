import { FC, MouseEvent } from 'react'

interface SuggestionsProps {
  filteredList: string[]
  isSuggestions: boolean
  input: string
  onClick: (e: MouseEvent<HTMLLIElement>) => void
}

const Suggestions: FC<SuggestionsProps> = (props) => {
  const { filteredList, isSuggestions, input, onClick } = props

  if (isSuggestions && input) {
    return (
      <>
        {filteredList.length ? (
          <ul className="suggestions-list">
            {filteredList.map((suggestion, index) => {
              return (
                <li
                  key={suggestion}
                  onClick={onClick}
                  className="suggestion-item"
                >
                  {suggestion}
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="empty">
            <em>No suggestions!</em>
          </div>
        )}
      </>
    )
  }

  return <></>
}

export default Suggestions
