
export const HappifierTable = ({happifier}) => {
  return (
    <table>
      <tbody>
        {happifier.map((field, index) => {
          return (
            <tr key={index}>
              <td>
                <label for={field.id}>{field.title}</label>
              </td>
              <td>
                <input id={field.id} placeholder={field.placeholder} value={field.value}/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
