import useMetronomeStore from '../store';
import MetronomeSound from './MetronomeSound';
import { BsStopFill, BsPlayFill } from 'react-icons/bs';

interface ControlButtonsProps {
  sound: MetronomeSound;
}

const ControlButtons = ({ sound }: ControlButtonsProps) => {
  const { isPlaying, togglePlay } = useMetronomeStore();

  return (
    <button onClick={togglePlay}>
      {isPlaying ? (
        <>
          <BsStopFill /> Stop
        </>
      ) : (
        <>
          <BsPlayFill /> Play
        </>
      )}
    </button>
  );
};

export default ControlButtons;
