interface OptionFieldProps {
    label: string;
    value: string
    name: string
    options: { value: string; label: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const OptionField: React.FC<OptionFieldProps> = ({ label, value, name, options, onChange }) => (
    <div>
        <label htmlFor={name}>{label}:</label>
        <select id={name} name={name} value={value} onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);
export default OptionField;