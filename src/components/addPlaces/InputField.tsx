interface InputFieldProps {
    label: string
    value: string;
    name: string
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputField: React.FC<InputFieldProps> = ({ label, value, name, type, onChange }) => (
    <div>
        <label htmlFor={name}>{label}:</label>
        <input type={type} id={name} name={name} value={value} onChange={onChange} required/>
    </div>
);
export default InputField;