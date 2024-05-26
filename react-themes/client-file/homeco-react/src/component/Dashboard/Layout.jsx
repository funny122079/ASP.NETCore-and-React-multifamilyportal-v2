import ProtoTypes from "prop-types";

function Layout({ title, children }) {
  return (
    <div className="col-lg-9 col-md-8 col-12 mg-top-30">
      <div className="homec-dashboard__inner homec-border">
        <h3 className="homec-dashboard__heading m-0">{title}</h3>
        <div className="row">{children}</div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  title: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
};

export default Layout;
