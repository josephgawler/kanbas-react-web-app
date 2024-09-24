export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <label htmlFor="wd-group">Assignment Group</label><br></br>
        <select id="wd-group" ><br></br>
            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
        </select><br></br>

        <label htmlFor="wd-display-grade-as">Display Grade as</label><br></br>
        <select id="wd-display-grade-as"><br></br>
            <option selected value="Percentage">Percentage</option>
        </select>
        

        {/* Complete on your own */}
      </table>
    </div>
);}
