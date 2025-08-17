import {useEffect, useState} from "react";
import type {TravelModel, VisitModel} from "../model/travel.model.ts";

function useGetTravelConfig() {
    const [config, setConfig] = useState<TravelModel | undefined>();

    useEffect(() => {
        fetch("/config.json")
            .then((res) => res.json())
            .then((data) => setConfig(data));
    }, []);

    const getTravelConfig = () => {
        return config;
    };

    const getVisits = () => {
        return config?.visits ?? [];
    };

    const getAllPhotos = () => {
        return config?.visits.flatMap(visit => visit.photos) ?? [];
    };

    const getVisitPhotos = (visit: VisitModel) => {
        return visit.photos;
    };

    return {getTravelConfig, getVisits, getAllPhotos, getVisitPhotos};
}

export default useGetTravelConfig