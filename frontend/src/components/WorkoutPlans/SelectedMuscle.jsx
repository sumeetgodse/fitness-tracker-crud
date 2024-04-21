import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { musclePlans } from "./constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const SelectedMuscle = ({ selectedMuscle, setSelectedMuscle }) => {
  const data = musclePlans.find((plan) => plan.type === selectedMuscle);

  return (
    <>
      {selectedMuscle ? (
        <div style={{ margin: "1%" }}>
          <Button
            onClick={() => {
              setSelectedMuscle("");
            }}
            variant="outlined"
            size="small"
          >
            Back to Plans
          </Button>
          <div
            style={{ marginTop: "2%", display: "flex", flexDirection: "row" }}
          >
            <div style={{ width: "70%" }}>
              {data.workouts.map((plan, index) => {
                return (
                  <Accordion key={plan.name} defaultExpanded={index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <b>{plan.name}</b>
                    </AccordionSummary>
                    <table
                      style={{
                        margin: "2%",
                        background: "#f5f5f5",
                        padding: "1%",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            <u>Difficulty</u> :
                          </td>
                          <td>{plan.difficulty}</td>
                        </tr>
                        <tr>
                          <td>
                            <u>Equipment</u> :
                          </td>
                          <td>{plan.equipment}</td>
                        </tr>
                        <tr>
                          <td>
                            <u>Type</u> :
                          </td>
                          <td>{plan.type}</td>
                        </tr>
                      </tbody>
                    </table>
                    <AccordionDetails>{plan.instructions}</AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div style={{ width: "30%", marginLeft: "2%" }}>
              <img
                style={{ height: "300px", width: "300px" }}
                src={`../../../public/${data.icon}.png`}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
