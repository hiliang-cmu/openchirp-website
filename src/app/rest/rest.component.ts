import { Component, Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import {HttpClient, RestClient, Client, Get, Put, Post, Delete, Headers, Path, Body, Query, Produces, MediaType} from '@maxxton/angular-rest';
import { Observable } from 'rxjs/Observable';
/*
@Injectable()
@Client({
    serviceId: 'location-service',
    baseUrl: 'http://iot.andrew.cmu.edu:10010/api',
    headers: {
        'content-type': 'application/json'
    }
})
*/
export class LocationClient {
/*
    constructor(http:HttpClient){
        //super(<HttpClient>http);
    }
    */
/*
    protected requestInterceptor(req: Request):void {
        if (SessionFactory.getInstance().isAuthenticated) {
            req.headers.append('jwt', SessionFactory.getInstance().credentials.jwt);
        }
    }
*/
/*
    protected responseInterceptor(res: Observable<Response>): Observable<any> {
        // do anything with responses
        return res;
    }
*/
    //@Get("/location")
  //  @Produces(MediaType.JSON)
    public getRootLocation() { 
        return "hello"; 
    };
/*
    @Get("/location/{id}")
    //@Map(resp => new resp.json())
    public getLocationById( @Path("id") id: number): Observable<Response>{ return null; };
*/
/*
    @Post("/location/{id}")
    @Headers({
        'content-type': 'application/json'
    })
    public postLocation( @Body location: string): Observable<Response> { return null; };

    @Put("/location/{id}")
    public updateLocation( @Path("id") id: string, @Body location: string): Observable<Response> { return null; };

    @Delete("/location/{id}")
    public deleteLocationById( @Path("id") id: string): Observable<Response> { return null; };
*/
}
