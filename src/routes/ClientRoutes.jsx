import { Route, Switch } from "react-router-dom";
import HomeScreens from "../screens/Home/screens/HomeScreens";
import slug from "../resources/slug";
import IntroduceScreens from "../screens/Introduce/screens/IntroduceScreens";
import NewsScreens from "../screens/News/screens/NewsScreens";
import ProcessScreens from "../screens/Process/screens/ProcessScreens";
import ShrimpScreens from "../screens/Shrimp/screens/ShrimpScreens";
import ProductsScreens from "../screens/Product/screens/ProductsScreens";
import ContactsScreens from "../screens/Contacts/screens/ContactsScreens";
import RecruistScreens from "../screens/Recruit/screens/RecruitsScreens";
import ImageVideoScreen from "../screens/ImageVideo/screens/ImageVideoScreen";
import DetailsScreens from "../screens/DetailsProduct/screens/DetailsScreens";

export default function ClientRoutes() {
  return (
    <Switch>
      <Route exact path={slug.home} render={() => <HomeScreens />} />
      <Route exact path={slug.introduce} render={() => <IntroduceScreens />} />
      <Route exact path={slug.news} render={() => <NewsScreens />}></Route>
      <Route exact path={slug.process} render={() => <ProcessScreens />} />
      <Route exact path={slug.shrimp} render={() => <ShrimpScreens />}></Route>
      <Route
        exact
        path={slug.product}
        render={() => <ProductsScreens />}
      ></Route>
      <Route
        exact
        path={slug.contact}
        render={() => <ContactsScreens />}
      ></Route>
      <Route
        exact
        path={slug.recruit}
        render={() => <RecruistScreens />}
      ></Route>
      <Route
        exact
        path={slug.imagevideo}
        render={() => <ImageVideoScreen />}
      ></Route>

      <Route
        exact
        path={slug.details}
        render={(props) => <DetailsScreens {...props} />}
      ></Route>
    </Switch>
  );
}
