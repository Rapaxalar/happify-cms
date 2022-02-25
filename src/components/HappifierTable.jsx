import { HappifierRow } from "./HappifierRow";

export const HappifierTable = ({happifier}) => {
  return (
    <table>
      <tbody>
        {happifier.map((field, index) => <HappifierRow key={index} field={field}/>)}
      </tbody>
    </table>
  );
}
