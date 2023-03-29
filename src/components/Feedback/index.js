import {Component} from 'react'

import './index.css'

const Emoji = props => {
  const {emojiObject, onClickHappy} = props
  const {name, imageUrl} = emojiObject

  const onHappyImage = () => {
    onClickHappy(name)
  }

  return (
    <li className="emoji-card">
      <img src={imageUrl} className="emoji" onClick={onHappyImage} alt={name} />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {isEmojiHappy: false}

  onClickHappy = () => {
    this.setState(prevState => ({isEmojiHappy: !prevState.isEmojiHappy}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isEmojiHappy} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          {isEmojiHappy ? (
            <>
              <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
              <h1 className="emoji-status">Thank You!</h1>
              <p className="emoji-reply">
                We will use your feedback to improve our customer support
                performance
              </p>
            </>
          ) : (
            <>
              <h1 className="support-feedback">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-body">
                {emojis.map(eachEmoji => (
                  <Emoji
                    key={eachEmoji.id}
                    emojiObject={eachEmoji}
                    onClickHappy={this.onClickHappy}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
