import IcSpeechBubble from '../../assets/icons/icSpeechBubble';
import { WhiteCricleBtn } from './Button.styled';

function FeedbackBtn() {
  const goToSite = () => {
    window.open('https://forms.gle/YQXhTe4pD2qovnxh6');
  };

  return (
    <WhiteCricleBtn onClick={goToSite}>
      <IcSpeechBubble
        width={'20'}
        height={'20'}
      />
    </WhiteCricleBtn>
  )
}

export default FeedbackBtn
