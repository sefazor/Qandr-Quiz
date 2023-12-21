import { Text, UnstyledButton } from '@mantine/core';
import { IoMdCheckmark } from 'react-icons/io';

interface Props {
  title: string;
  type: string;
  checked?: boolean;
  onClick: () => void;
  small?: boolean

}

export const QuestionItem = ({ title, type, onClick, checked = false, small = false }: Props) => {
  return (<UnstyledButton className={`answer-item ${checked ? 'checked-answer' : ''} ${small ? 'small-item' : ''}`} onClick={() => onClick()}>
    <Text style={{ flex: 1 }} fw={700} fz={small ? 25 : 28}>{type}: {title}</Text>
    {checked &&
      <IoMdCheckmark size={24} color={"#000"}/>
    }
  </UnstyledButton>);
}
export default QuestionItem;
