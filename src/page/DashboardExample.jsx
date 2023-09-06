import React from "react";

const DashboardExample = () => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard v3</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v3</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="far fa-bookmark" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Bookmarks</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '70%'}} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="far fa-bookmark" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Bookmarks</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '70%'}} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="far fa-bookmark" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Bookmarks</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '70%'}} />
                    </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="far fa-bookmark" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Bookmarks</span>
                    <span className="info-box-number">41,410</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '25%'}} />
                    </div>
                    <span className="progress-description">
                      25% Increase in 30 Days
                    </span>
                  </div>
                </div>
              </div>

            </div>            
            <div className="row">   
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Simple Full Width Table</h3>
                    <div className="card-tools">
                      <ul className="pagination pagination-sm float-right">
                        <li className="page-item"><a className="page-link" href="#">«</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">»</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{width: 10}}>#</th>
                          <th>Task</th>
                          <th>Progress</th>
                          <th style={{width: 40}}>Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div className="progress progress-xs">
                              <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-danger">55%</span></td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div className="progress progress-xs">
                              <div className="progress-bar bg-warning" style={{width: '70%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-warning">70%</span></td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div className="progress-bar bg-primary" style={{width: '30%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-primary">30%</span></td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div className="progress-bar bg-success" style={{width: '90%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-success">90%</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Sales</h3>
                      <a href="javascript:void(0);">View Report</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span className="text-bold text-lg">$18,230.00</span>
                        <span>Sales Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up" /> 33.1%
                        </span>
                        <span className="text-muted">Since last month</span>
                      </p>
                    </div>
                    <div className="position-relative mb-4">
                      <canvas id="sales-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary" /> This year
                      </span>
                      <span>
                        <i className="fas fa-square text-gray" /> Last year
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Online Store Overview</h3>
                    <div className="card-tools">
                      <a href="#" className="btn btn-sm btn-tool">
                        <i className="fas fa-download" />
                      </a>
                      <a href="#" className="btn btn-sm btn-tool">
                        <i className="fas fa-bars" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-success text-xl">
                        <i className="ion ion-ios-refresh-empty" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-success" />{" "}
                          12%
                        </span>
                        <span className="text-muted">CONVERSION RATE</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-warning text-xl">
                        <i className="ion ion-ios-cart-outline" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-warning" />{" "}
                          0.8%
                        </span>
                        <span className="text-muted">SALES RATE</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <p className="text-danger text-xl">
                        <i className="ion ion-ios-people-outline" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-down text-danger" />{" "}
                          1%
                        </span>
                        <span className="text-muted">REGISTRATION RATE</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardExample;
