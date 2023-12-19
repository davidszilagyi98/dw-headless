import React, { useEffect, useState } from "react";
import getAllGroups from "../api/getAllGroups";

interface Group {
  name: string;
  id: number;
}

interface FacetProps {
  onSelectGroup: (selectedGroupIds: string[]) => void;
}

const Facet: React.FC<FacetProps> = ({ onSelectGroup }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = await getAllGroups();
        setGroups(groupsData);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (groupName: string) => {
    setSelectedCheckboxes((prevSelected) => {
      const isSelected = prevSelected.includes(groupName);
      const updatedSelected = isSelected
        ? prevSelected.filter((id) => id !== groupName)
        : [...prevSelected, groupName];

      onSelectGroup(updatedSelected);

      return updatedSelected;
    });
  };

  return (
    <div>
      <div className="d-lg-none d-flex justify-content-center m-4">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Filter
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="p-3">
                  {selectedCheckboxes.length > 0 && (
                    <p>{selectedCheckboxes.join(", ")}</p>
                  )}
                  <h5 className="mt-3 mb-4">Filter by:</h5>
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button bg-white info-heading"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne">
                          Equipment type
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample">
                        {groups.map((group) => (
                          <div className="accordion-body" key={group.id}>
                            <form>
                              <div>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={selectedCheckboxes.includes(
                                    group.name
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(group.name)
                                  }
                                />
                                <label className="form-check-label ms-3">
                                  {group.name}
                                </label>
                              </div>
                            </form>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        {selectedCheckboxes.length > 0 && (
          <p>{selectedCheckboxes.join(", ")}</p>
        )}
        <h5 className="">Filters:</h5>
        <div>
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-white info-heading"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  Equipment type
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample">
                {groups.map((group) => (
                  <div className="accordion-body">
                    <form>
                      <div>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedCheckboxes.includes(group.name)}
                          onChange={() => handleCheckboxChange(group.name)}
                        />
                        <label className="form-check-label ms-3">
                          {group.name}
                        </label>
                      </div>
                    </form>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facet;
