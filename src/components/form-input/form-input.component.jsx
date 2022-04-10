import { Group, Input, Label } from './form-input-styles/form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <Input onChange={handleChange} {...otherProps} />

    {label && <Label shrink={otherProps.value.length}>{label}</Label>}
  </Group>
);

export default FormInput;
