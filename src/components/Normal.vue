<template>
  <main class="fixed-nav sticky-footer bg-dark" id="page-top" data-gr-c-s-loaded="true">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <a class="navbar-brand" href="index.html">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Dashboard">
                    <a class="nav-link" href="#">
                        <i class="fa fa-fw fa-dashboard"></i>
                        <span class="nav-link-text">Dashboard</span>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav sidenav-toggler">
                <li class="nav-item">
                    <a class="nav-link text-center" id="sidenavToggler" style="cursor:context-menu;">
                        <i class="fa fa-fw fa-angle-left" style="visibility:hidden;"></i>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
                        <i class="fa fa-fw fa-sign-out"></i>Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="content-wrapper">
        <div class="container-fluid">
            <!-- Breadcrumbs-->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">My Dashboard</li>
            </ol>
            <!--Start: form -->
            <div class="container">
              <form>
                <div class="form-row">
                  <div class="col-md-2 d-flex justify-content-center align-items-end">
                   <label for="">Token Access</label>
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="ex. ABVN-5454">
                  </div>
                  <div class="col-md-3">
                    <button type="submit" class="btn btn-info col-12"><i class="fa fa-send" aria-hidden="true"></i> Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <!-- Tables-->
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="card mt-5">
                            <div class="card-header">
                                <i class="fa fa-users"></i> TEAM A</div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        John Doe
                                        <span class="badge badge-primary badge-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        John Doe
                                        <span class="badge badge-primary badge-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        John Doe
                                        <span class="badge badge-primary badge-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer small text-muted">Average Rank: 845</div>
                            </div>
                    </div>
                    <div class="col-6">
                        <div class="card mt-5">
                            <div class="card-header">
                                <i class="fa fa-users"></i> TEAM B</div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        John Doe
                                        <span class="badge badge-primary badge-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        John Doe
                                        <span class="badge badge-primary badge-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        John Doe
                                        <span class="badge badge-primary badge-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer small text-muted">Average Rank: 845</div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container-fluid-->
        <!-- /.content-wrapper-->
        <footer class="sticky-footer">
            <div class="container">
                <div class="text-center">
                    <small>Copyright © Your Website 2018</small>
                </div>
            </div>
        </footer>
        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top" style="display: none;">
            <i class="fa fa-angle-up"></i>
        </a>
        <!-- Logout Modal-->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
                    </div>
                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a class="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

