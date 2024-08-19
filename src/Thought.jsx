/* eslint-disable react/prop-types */
import { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timesUp = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    return () => {
      clearTimeout(timesUp);
    };
  }, [thought, removeThought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      />
      <div className="text">{thought.text}</div>
    </li>
  );
}
