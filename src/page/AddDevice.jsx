import React from "react";

function AddDevice() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add New Device</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/AddDevice">Add New Device</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Device General Information</h3>
                </div>
                <form>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="deviceName">Device name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="deviceName"
                        placeholder="Device name"
                        name="deviceName"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div>
                            <label htmlFor="idDevice">ID Device</label>
                            <input
                              type="text"
                              className="form-control"
                              id="idDevice"
                              placeholder="ID Device"
                              name="idDevice"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <div>
                            <label htmlFor="updateInterval">
                              Set update interval
                            </label>
                            <select className="form-control">
                              <option>option 1</option>
                              <option>option 2</option>
                              <option>option 3</option>
                              <option>option 4</option>
                              <option>option 5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="deviceDescription">
                        Device description
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        id="deviceDescription"
                        placeholder="Device description"
                        name="deviceDescription"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
          }}
        >
          <button type="submit" className="btn btn-primary">
            Add device
          </button>
        </div>
      </section>
    </div>
  );
}

export default AddDevice;
