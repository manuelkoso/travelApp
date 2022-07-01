package it.units.backend.model;

import java.util.Date;
import java.util.List;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class Travel implements JsonSerializable{
    
    private String id;
    private String userId;
    private Date date;
    private String vehicle;
    private List pointsOfRoute;
    private List pointsOfStages;

    public Travel(Date date, String vehicle, List pointsOfRoute, List pointsOfStages) {
        this.date = date;
        this.vehicle = vehicle;
        this.pointsOfRoute = pointsOfRoute;
        this.pointsOfStages = pointsOfStages;
    }

    public Travel(String id, String userdId, Date date, String vehicle, List pointsOfRoute, List pointsOfStages) {
        this.id = id;
        this.userId = userdId;
        this.date = date;
        this.vehicle = vehicle;
        this.pointsOfRoute = pointsOfRoute;
        this.pointsOfStages = pointsOfStages;
    }

    public Travel(String vehicle, List pointsOfRoute, List pointsOfStages) {
        this.vehicle = vehicle;
        this.pointsOfRoute = pointsOfRoute;
        this.pointsOfStages = pointsOfStages;
    }

    public Travel(String id, String vehicle, List pointsOfRoute, List pointsOfStages) {
        this.id = id;
        this.vehicle = vehicle;
        this.pointsOfRoute = pointsOfRoute;
        this.pointsOfStages = pointsOfStages;
    }
    
    

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserdId() {
        return userId;
    }

    public void setUserdId(String userdId) {
        this.userId = userdId;
    }

    
    
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public List getPointsOfRoute() {
        return pointsOfRoute;
    }

    public void setPointsOfRoute(List pointsOfRoute) {
        this.pointsOfRoute = pointsOfRoute;
    }

    public List getPointsOfStages() {
        return pointsOfStages;
    }

    public void setPointsOfStages(List pointsOfStages) {
        this.pointsOfStages = pointsOfStages;
    }

    @Override
    public JSONObject toJson() throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("date", this.date);
        jsonObject.put("vehicle", this.vehicle);
        jsonObject.put("pointsOfRoute", this.pointsOfRoute);
        jsonObject.put("pointsOfStages", this.pointsOfStages);
        return jsonObject;
    }

    
       
}
